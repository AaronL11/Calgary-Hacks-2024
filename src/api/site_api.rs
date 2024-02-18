use crate::{models::site_model::Site, mongoapi::mongo_sites::MongoSites};
use rocket::{catch, get, http::Status, serde::json::Json, Request, State};

#[get("/site/<path>")]
pub fn get_site(db: &State<MongoSites>, path: String) -> Result<Json<Site>, Status> {
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
pub fn get_all_sites(db: &State<MongoSites>) -> Result<Json<Vec<Site>>, Status> {
    let sites = db.get_all_sites();

    match sites {
        Ok(sites) => Ok(Json(sites)),
        Err(_) => Err(Status::InternalServerError),
    }
}

#[catch(404)]
pub fn not_found(req: &Request) -> String {
    format!("Sorry, {} you fucked up getting a site", req.uri())
}
