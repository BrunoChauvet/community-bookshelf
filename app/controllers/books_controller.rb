class BooksController < ApplicationController
	def search
    render json: fetch_books(params)
  end

  def fetch_books(params)
    Rails.cache.fetch("books/#{params[:q]}/#{params[:p]}") { fetch_books!(params) }
  end

  def fetch_books!(params)
    GoogleBooks.search(params[:q], {:country => "fr", :count => 10, :page => params[:p].to_i, :api_key => ENV['API_KEY']}).to_json
  end
end
