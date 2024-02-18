use std::env;
extern crate dotenv;

use dotenv::dotenv;

use mongodb::{
    bson::{doc, extjson::de::Error, oid::ObjectId},
    sync::{Client, Collection},
};

use crate::models::site_model::Site;

pub struct MongoSites {
    col: Collection<Site>,
}

// DiscoverYYC
// Historical Data
impl MongoSites {
    pub fn init() -> Self {
        dotenv().ok();
        let uri = match env::var("MONGOURI") {
            Ok(v) => v.to_string(),
            Err(_) => format!("Error loading env variable"),
        };
        let client = Client::with_uri_str(uri).unwrap();
        let db = client.database("DiscoverYYC");
        let col: Collection<Site> = db.collection("Historical Data");
        MongoSites { col }
    }

    pub fn get_site(&self, id: &String) -> Result<Site, Error> {
        let obj_id = ObjectId::parse_str(id).unwrap();
        let filter = doc! {"_id": obj_id};
        let site_detail = self
            .col
            .find_one(filter, None)
            .ok()
            .expect("Error getting site");
        Ok(site_detail.unwrap())
    }

    pub fn get_all_sites(&self) -> Result<Vec<Site>, Error> {
        let cursors = self.col.find(None, None).ok().expect("Error getting sites");
        let sites = cursors.map(|doc| doc.unwrap()).collect();

        Ok(sites)
    }

    pub fn get_sites_nearby(&self, lat: f64, lon: f64, radius: f64) -> Result<Vec<Site>, Error> {
        let filter = doc! {
            "point": {
                "$near": {
                    "$geometry": {
                        "type": "Point",
                        "coordinates": [ lon, lat ],
                    },
                    "$maxDistance": radius,
                }
            }
        };

        // Call `find` and directly handle the Result to get the Cursor.
        let cursors = self
            .col
            .find(filter, None)
            .ok()
            .expect("Error getting nearby sites");

        // Now, `cursor` is a Cursor<Site>, not a Result.
        let sites = cursors.map(|doc| doc.unwrap()).collect();

        Ok(sites)
    }
}