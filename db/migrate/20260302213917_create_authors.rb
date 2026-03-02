class CreateAuthors < ActiveRecord::Migration[7.0]
  def change
    create_table :authors do |t|
      t.string :name, null: false
      t.references :post, null: false, foreign_key: true

      t.timestamps
    end
  end
end
