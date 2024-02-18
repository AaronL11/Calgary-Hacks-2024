mod api;
mod models;
mod mongoapi;

#[macro_use]
extern crate rocket;

use api::site_api::{get_all_sites, get_site, get_sites_nearby};
use api::user_api::{create_user, delete_user, get_all_users, get_user, not_found, update_user};
use mongoapi::mongo_sites::MongoSites;
use mongoapi::mongo_users::MongoUsers;

#[launch]
fn rocket() -> _ {
    let users_db = MongoUsers::init();
    let sites_db = MongoSites::init();
    rocket::build()
        .manage(users_db)
        .manage(sites_db)
        .mount("/", routes![create_user])
        .mount("/", routes![get_user])
        .mount("/", routes![update_user])
        .mount("/", routes![delete_user])
        .mount("/", routes![get_all_users])
        .mount("/", routes![get_site])
        .mount("/", routes![get_all_sites])
        .mount("/", routes![get_sites_nearby])
        .register("/", catchers![not_found])
}
