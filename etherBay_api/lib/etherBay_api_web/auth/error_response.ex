defmodule EtherBayApiWeb.Auth.ErrorResponse.UnAuthorized do
  defexception message: "Unauthorized", plug_status: 401
end

defmodule EtherBayApiWeb.Auth.ErrorResponse.NotFound do
  defexception message: "Not Found", plug_status: 404
end
