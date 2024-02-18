mod api;
mod models;
mod mongoapi;

#[macro_use]
extern crate rocket;

use api::user_api::{create_user, delete_user, get_all_users, get_user, not_found, update_user};
use mongoapi::mongo_users::MongoUsers;

#[launch]
fn rocket() -> _ {
    let db = MongoUsers::init();
    rocket::build()
        .manage(db)
        .mount("/", routes![create_user])
        .mount("/", routes![get_user])
        .mount("/", routes![update_user])
        .mount("/", routes![delete_user])
        .mount("/", routes![get_all_users])
        .register("/", catchers![not_found])
}
