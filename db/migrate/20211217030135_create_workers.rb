class CreateWorkers < ActiveRecord::Migration[6.1]
  def change
    create_table :workers do |t|
      t.string :profession
      t.text :desc

      t.timestamps
    end
  end
end
