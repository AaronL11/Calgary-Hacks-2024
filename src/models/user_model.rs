use mongodb::bson::oid::ObjectId;
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct User {
    #[serde(rename = "_id", skip_serializing_if = "Option::is_none")]
    pub id: Option<ObjectId>,
    pub username: String,
    pub name: String,
    pub location: String,
    pub title: String,
    pub level: u32,
}

impl Default for User {
    fn default() -> Self {
        User {
            id: Some(ObjectId::new()),
            username: String::new(),
            name: String::new(),
            location: String::new(),
            title: String::new(),
            level: 1,
        }
    }
}
