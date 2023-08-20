class User < ApplicationRecord
  has_secure_password
  after_destroy :ensure_an_admin_remains

  class Error < StandardError
  end

  private

  def ensure_an_admin_remains
    return unless User.count.zero?

    raise Error, "Can't delete last user"
  end
end
