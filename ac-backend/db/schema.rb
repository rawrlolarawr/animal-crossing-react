# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_07_221304) do

  create_table "bugs", force: :cascade do |t|
    t.string "name"
    t.string "active_hours"
    t.string "location"
    t.string "flavor_text"
    t.integer "value"
    t.integer "critterpedia_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["critterpedia_id"], name: "index_bugs_on_critterpedia_id"
  end

  create_table "critterpedia", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "designs", force: :cascade do |t|
    t.string "ma_code"
    t.string "mo_code"
    t.string "img_src"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "fish", force: :cascade do |t|
    t.string "name"
    t.string "active_hours"
    t.string "location"
    t.string "flavor_text"
    t.integer "value"
    t.integer "critterpedia_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["critterpedia_id"], name: "index_fish_on_critterpedia_id"
  end

  create_table "sea_critters", force: :cascade do |t|
    t.string "name"
    t.string "active_hours"
    t.string "location"
    t.string "flavor_text"
    t.integer "value"
    t.integer "critterpedia_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["critterpedia_id"], name: "index_sea_critters_on_critterpedia_id"
  end

  create_table "villagers", force: :cascade do |t|
    t.string "personality"
    t.string "favorite_color"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
