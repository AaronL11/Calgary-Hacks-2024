use chrono::{DateTime, Utc};
use mongodb::bson::oid::ObjectId;
use serde::{Deserialize, Serialize}; // Import TimeZone for creating default dates

#[derive(Default, Debug, Serialize, Deserialize)]
pub struct Site {
    #[serde(rename = "_id", skip_serializing_if = "Option::is_none")]
    pub _id: Option<ObjectId>,
    pub architect: Option<String>,
    pub point: [f64; 2],
    pub registered_dsgtn_dt: DateTime<Utc>,
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
