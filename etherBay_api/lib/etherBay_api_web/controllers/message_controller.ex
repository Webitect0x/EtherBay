defmodule EtherBayApiWeb.MessageController do
  use EtherBayApiWeb, :controller
  import Plug.Conn

  alias EtherBayApi.Messages
  alias EtherBayApi.Messages.Message

  action_fallback(EtherBayApiWeb.FallbackController)

  def index(conn, _params) do
    messages = Messages.list_messages()
    render(conn, :index, messages: messages)
  end

  def create(conn, %{"message" => message_params}) do
    with {:ok, %Message{} = message} <- Messages.create_message(message_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", ~p"/api/messages/#{message}")
      |> render(:show, message: message)
    end
  end

  def get_message_data(conn, %{"receiver_id" => receiver_id}) do
    current_user_id = get_session(conn, :account_id)

    chat_session = Messages.get_chat_data(current_user_id, receiver_id)

    conn
    |> render(:show, message: chat_session)
  end

  def show(conn, %{"id" => id}) do
    message = Messages.messages_in_session(id)
    render(conn, :index, messages: message)
  end

  def update(conn, %{"id" => id, "message" => message_params}) do
    message = Messages.get_message!(id)

    with {:ok, %Message{} = message} <- Messages.update_message(message, message_params) do
      render(conn, :show, message: message)
    end
  end

  def delete(conn, %{"id" => id}) do
    message = Messages.get_message!(id)

    with {:ok, %Message{}} <- Messages.delete_message(message) do
      send_resp(conn, :no_content, "")
    end
  end
end
