mod api;
mod models;
mod mongoapi;

#[macro_use]
extern crate rocket;

use api::{
    site_api,
    site_api::get_site,
    user_api,
    user_api::{create_user, delete_user, get_all_users, get_user, update_user},
};
use mongoapi::{mongo_sites::MongoSites, mongo_users::MongoUsers};

#[catch(404)]
fn general_not_found() -> &'static str {
    "Sorry. Nothing to see"
}

#[launch]
fn rocket() -> _ {
    let db_users = MongoUsers::init();
    let db_sites = MongoSites::init();
    rocket::build()
        .manage(db_users)
        .manage(db_sites)
        .mount("/", routes![create_user])
        .mount("/", routes![get_user])
        .mount("/", routes![update_user])
        .mount("/", routes![delete_user])
        .mount("/", routes![get_all_users])
        .mount("/", routes![get_site])
        .register("/", catchers![general_not_found])
        .register("/site", catchers![site_api::not_found])
        .register("/user", catchers![user_api::not_found])
}
