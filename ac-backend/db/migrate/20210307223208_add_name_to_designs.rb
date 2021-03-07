class AddNameToDesigns < ActiveRecord::Migration[6.0]
  def change
    add_column :designs, :name, :string
  end
end
