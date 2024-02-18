use crate::{models::user_model::User, mongoapi::mongo_users::MongoUsers};
use mongodb::{bson::oid::ObjectId, results::InsertOneResult};
use rocket::{catch, delete, get, http::Status, post, put, serde::json::Json, Request, State};

#[post("/user", data = "<new_user>")]
pub fn create_user(
    db: &State<MongoUsers>,
    new_user: Json<User>,
) -> Result<Json<InsertOneResult>, Status> {
    let data = User {
        id: None,
        username: new_user.username.to_owned(),
        name: new_user.name.to_owned(),
        location: new_user.location.to_owned(),
        title: new_user.title.to_owned(),
        level: new_user.level.to_owned(),
    };

    let user_detail = db.create_user(data);

    match user_detail {
        Ok(user) => Ok(Json(user)),
        Err(_) => Err(Status::InternalServerError),
    }
}

#[get("/user/<path>")]
pub fn get_user(db: &State<MongoUsers>, path: String) -> Result<Json<User>, Status> {
    let id = path;
    if id.is_empty() {
        return Err(Status::BadRequest);
    };
    let user_detail = db.get_user(&id);

    match user_detail {
        Ok(user) => Ok(Json(user)),
        Err(_) => Err(Status::InternalServerError),
    }
}

#[put("/user/<path>", data = "<new_user>")]
pub fn update_user(
    db: &State<MongoUsers>,
    path: String,
    new_user: Json<User>,
) -> Result<Json<User>, Status> {
    let id = path;
    if id.is_empty() {
        return Err(Status::BadRequest);
    };
    let data = User {
        id: Some(ObjectId::parse_str(&id).unwrap()),
        username: new_user.username.to_owned(),
        name: new_user.name.to_owned(),
        location: new_user.location.to_owned(),
        title: new_user.title.to_owned(),
        level: new_user.level.to_owned(),
    };
    let update_result = db.update_user(&id, data);

    match update_result {
        Ok(update) => {
            if update.matched_count == 1 {
                let updated_user_info = db.get_user(&id);

                return match updated_user_info {
                    Ok(user) => Ok(Json(user)),
                    Err(_) => Err(Status::InternalServerError),
                };
            } else {
                return Err(Status::NotFound);
            }
        }
        Err(_) => Err(Status::InternalServerError),
    }
}

#[delete("/user/<path>")]
pub fn delete_user(db: &State<MongoUsers>, path: String) -> Result<Json<&str>, Status> {
    let id = path;
    if id.is_empty() {
        return Err(Status::BadRequest);
    };
    let result = db.delete_user(&id);

    match result {
        Ok(res) => {
            if res.deleted_count == 1 {
                return Ok(Json("User successfully deleted!"));
            } else {
                return Err(Status::NotFound);
            }
        }
        Err(_) => Err(Status::InternalServerError),
    }
}

#[get("/users")]
pub fn get_all_users(db: &State<MongoUsers>) -> Result<Json<Vec<User>>, Status> {
    let users = db.get_all_users();

    match users {
        Ok(users) => Ok(Json(users)),
        Err(_) => Err(Status::InternalServerError),
    }
}

#[catch(404)]
pub fn not_found(req: &Request) -> String {
    format!("Sorry, {} you fucked up :)", req.uri())
}
