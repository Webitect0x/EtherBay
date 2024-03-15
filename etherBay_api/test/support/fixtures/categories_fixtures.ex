defmodule EtherBayApi.CategoriesFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `EtherBayApi.Categories` context.
  """

  @doc """
  Generate a category.
  """
  def category_fixture(attrs \\ %{}) do
    {:ok, category} =
      attrs
      |> Enum.into(%{
        category_name: "some category_name"
      })
      |> EtherBayApi.Categories.create_category()

    category
  end
end
