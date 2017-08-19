import Html exposing (..)

main =
  Html.beginnerProgram { model = model, update = update, view = view }


-- Model

type alias Model =
  {
  }

model : Model
model =
  Model


-- Update

type Msg
  = None

update : Msg -> Model -> Model
update msg model =
  case msg of
    None ->
      model


-- View

view : Model -> Html Msg
view model =
  div []
    [ text "hello world"
    ]