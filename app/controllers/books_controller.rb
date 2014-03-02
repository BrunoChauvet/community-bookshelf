class BooksController < ApplicationController
	def search
    render json: GoogleBooks.search(params[:q], {:count => 10, :page => params[:p].to_i}).to_json
  end
end
