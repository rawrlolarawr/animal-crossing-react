class CreateDesigns < ActiveRecord::Migration[6.0]
  def change
    create_table :designs do |t|
      t.string :ma_code
      t.string :mo_code
      t.string :img_src
      
      t.timestamps
    end
  end
end
