class Api::V1::RecipesController < ApplicationController 
  protect_from_forgery with: :null_session
  def index 
    recipes = Recipe.all 
    render json: recipes
  end

  def create 
    recipe = Recipe.create(recipe_params)
    render json: recipe 
  end

  def show 
    recipe = Recipe.find(params[:id])
    render json: recipe 
  end

  def update 
    recipe = Recipe.find(params[:id])
    recipe.update(recipe_params)
    render json: recipe 
  end

  def destroy 
    recipe = Recipe.find(params[:id])
    recipe.destroy 
    puts 'recipe successfully destroyed'
  end

  private 
  def recipe_params 
    params.require(:recipe).permit(:name, :ingredients, :instruction, :image) 
  end
end