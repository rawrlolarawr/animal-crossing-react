class CreateCritterpedia < ActiveRecord::Migration[6.0]
  def change
    create_table :critterpedia do |t|
      t.timestamps
    end
  end
end
