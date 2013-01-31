class UserMailer < ActionMailer::Base
  default :from => "fly@airfordable.co"

  def welcome_email(user)
    mail(:to => user.email, :subject => "Airfordable Invitation Request Received")
  end
end
