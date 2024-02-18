use crate::{models::site_model::Site, mongoapi::mongo_sites::MongoSites};
use rocket::{catch, get, http::Status, serde::json::Json, Request, State};

#[get("/site/<path>")]
pub async fn get_site(db: &State<MongoSites>, path: String) -> Result<Json<Site>, Status> {
    let id = path;
    if id.is_empty() {
        return Err(Status::BadRequest);
    };
    let site_detail = db.get_site(&id);

    match site_detail {
        Ok(site) => Ok(Json(site)),
        Err(_) => Err(Status::InternalServerError),
    }
}

#[get("/sites")]
pub async fn get_all_sites(db: &State<MongoSites>) -> Result<Json<Vec<Site>>, Status> {
    let sites = db.get_all_sites();

    match sites {
        Ok(sites) => Ok(Json(sites)),
        Err(_) => Err(Status::InternalServerError),
    }
}

// EXAMPLE query: https://localhost:4344/sites/nearby?lat=51.1766855&lon=-114.1296453&radius=2800
// this should give 2 points (in Evanstone and Panorama Hills communities)
#[get("/sites/nearby?<lat>&<lon>&<radius>")]
pub async fn get_sites_nearby(
    db: &State<MongoSites>,
    lat: f64,
    lon: f64,
    radius: f64,
) -> Result<Json<Vec<Site>>, Status> {
    // match db.get_sites_nearby(lat, lon).await {
    //     Ok(sites) => Ok(Json(sites)),
    //     Err(_) => Err(Status::InternalServerError),
    // }
    let sites = db.get_sites_nearby(lat, lon, radius);

    match sites {
        Ok(sites) => Ok(Json(sites)),
        Err(_) => Err(Status::InternalServerError),
    }
}

#[catch(404)]
pub fn not_found(req: &Request) -> String {
    format!("Sorry, {} you fucked up getting a site", req.uri())
}
