class Worker < ApplicationRecord
  validates :profession, :desc, presence: true
end
