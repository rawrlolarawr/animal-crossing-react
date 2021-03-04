class AddAttributesToVillagers < ActiveRecord::Migration[6.0]
  def change
    add_column :villagers, :name, :string
    add_column :villagers, :species, :string
    add_column :villagers, :birthday, :string
    add_column :villagers, :catchphrase, :string
    add_column :villagers, :hobbies, :string
  end
end
