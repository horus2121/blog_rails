Rails.application.config.session_store :cookie_store, {
    :key => 'blog_rails',
    :domain => :all,
    :same_site => :none,
    :secure => :true,
    :tld_length => 2
  }