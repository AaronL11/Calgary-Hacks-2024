use std::env;
extern crate dotenv;

use dotenv::dotenv;

use mongodb::{
    bson::{doc, oid::ObjectId},
    error::Error,
    sync::{Client, Collection, Cursor},
};

use crate::models::site_model::Site;

pub struct MongoSites {
    col: Collection<Site>,
}

#[allow(dead_code)]
impl MongoSites {
    pub fn init() -> Self {
        dotenv().ok();
        let uri = env::var("MONGOURI").expect("Error loading env variable");
        let client = Client::with_uri_str(uri).expect("Error creating client");
        let db = client.database("rustDB");
        let col: Collection<Site> = db.collection("User");
        MongoSites { col }
    }

    pub fn get_site(&self, id: &str) -> Result<Site, Error> {
        let obj_id = ObjectId::parse_str(id);
        let filter = doc! {"_id": obj_id};
        let user_detail = self.col.find_one(filter, None)?;
        unimplemented!()
    }

    pub fn _get_nearest(&self, coordinates: [f64; 2]) -> Result<Cursor<Site>, Error> {
        let filter = doc! {
            "point": {
                "$near": {
                    "$geometry": {
                        "type": "Point",
                        "coordinates": vec![coordinates[0], coordinates[1]]
                    }
                }
            }
        };
        self.col.find(filter, None)
    }
}
