CommunityBookshelf::Application.routes.draw do
  root 'home#index'

  get "home/index"
  get "home/settings"
  get "books/search"
end
