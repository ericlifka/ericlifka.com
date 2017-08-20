import Html exposing (Html, div, text)
import Html.Attributes exposing (class)
import Css exposing (..)

styles =
  Css.asPairs >> Html.Attributes.style

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
  div [ styles [ position absolute, left (px 5) ] ]
    [ Html.text "hello world"
    ]
