use chrono::{DateTime, Utc};
use mongodb::bson::{oid::ObjectId, Bson};
use rocket::FromForm;
use serde::{Deserialize, Serialize};

#[derive(Debug, Deserialize, FromForm)]
pub struct QueryParams {
    pub lat: f64,
    pub lon: f64,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Point {
    #[serde(rename = "type")]
    point_type: String,
    coordinates: Vec<f64>,
}

#[derive(Debug, Serialize)]
pub struct GeoJson {
    #[serde(rename = "_id")]
    id: Bson,
    point: Point,
}

// Implementing Default for Point
impl Default for Point {
    fn default() -> Self {
        Point {
            point_type: String::from("Point"), // Or any default value you prefer
            coordinates: vec![0.0, 0.0],       // Assuming a default point at (0,0)
        }
    }
}

#[derive(Default, Debug, Serialize, Deserialize)]
pub struct Site {
    #[serde(rename = "_id", skip_serializing_if = "Option::is_none")]
    pub _id: Option<ObjectId>,
    pub architect: Option<String>,
    pub point: Option<Point>,
    pub registered_dsgtn_dt: Option<DateTime<Utc>>,
    pub pic_url: Option<String>,
    pub address: Option<String>,
    pub demolished_dt: Option<String>,
    pub significance_stmt_dscrn: Option<String>,
    pub construction_yr: Option<String>,
    pub significance_stmt_hrtg_val: Option<String>,
    pub significance_stmt_char_elem: Option<String>,
    pub significance_summ: Option<String>,
    pub orig_use_ty: Option<String>,
    pub significance_stmt_hist_owner: Option<String>,
    pub community: Option<String>,
    pub architecture_style: Option<String>,
    pub builder: Option<String>,
    pub significance_stmt_dir_search: Option<String>,
    pub name: Option<String>,
    pub master_plan_theme: Option<String>,
    pub development_era: Option<String>,
    pub last_update_dt: Option<String>,
    pub orig_owner: Option<String>,
}
