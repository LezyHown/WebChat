import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

export const select_uid = createAction("SELECT_USER_ID");
export const send_message = createAction("SEND_MESSAGE");

const initialState = {
  users: {
    selectedId: "",
    data: [
      {
        uid: "fBOYMlbzuq",
        img: "https://i.pinimg.com/736x/bf/9e/49/bf9e49454c9991cb530c86e0c4a8077e.jpg",
        uname: "Wlyneth",
        messages: [
          {
            own: false,
            dtime: "04:00",
            content: `Eilish's first studio album, When We All Fall Asleep, Where Do We Go? (2019), debuted atop the US Billboard 200 and UK Albums Chart. It was one of the best-selling albums of the year, buoyed by the success of its fifth single "Bad Guy", Eilish's first number-one on the US Billboard Hot 100. This made her the first artist born in the 21st century to release a chart-topping single. The following year, Eilish performed the theme song "No Time to Die" for the James Bond film of the same name, which topped the UK Singles Chart and won the Academy Award for Best Original Song in 2022. Her subsequent singles "Everything I Wanted", "My Future", "Therefore I Am", and "Your Power" peaked in the top 10 in the US and UK. Her second studio album, Happier Than Ever (2021), topped charts in 25 countries. `,
          },
          {
            own: false,
            dtime: "04:00",
            content: `Early life
            Eilish with her mother, Maggie Baird, in November 2018
            
            Billie Eilish Pirate Baird O'Connell was born in Los Angeles, California, on December 18, 2001.[6] She is the daughter of actress and teacher Maggie Baird[7][8] and actor Patrick O'Connell,[9] both of whom are also musicians and work on Eilish's tours.[10][11][12] Eilish is of Irish and Scottish descent.[13] She was conceived via in vitro fertilization.[14] Her middle name, Eilish, was originally meant to be her first name, while Pirate was to be her middle name.[15] She was raised in the Highland Park neighborhood of Los Angeles`,
          },
          { own: false, dtime: "04:00", content: `check these sample texts` },
          { own: true, dtime: "4:16", content: `Where's some sample text?` },
          { own: false, dtime: "05:33", content: `sample text` },
          { own: false, dtime: "05:33", content: `sample text 2` },
          { own: false, dtime: "05:33", content: `sample text 3, woooo` },
        ],
      },
      {
        uid: "rM6jFlVcv4",
        img: "https://i.pinimg.com/564x/92/82/d3/9282d37b90563bc743aad31e4c68f64f.jpg",
        uname: "Oysia",
        messages: [
          {
            own: false,
            dtime: "04:00",
            content: `Commercially successful, it reached the top 15 of record charts in numerous countries, including the US, UK, Canada, and Australia. `,
          },
          { own: false, dtime: "05:33", content: `sample text` },
          { own: false, dtime: "05:33", content: `sample text` },
          { own: true, dtime: "4:16", content: `Where's some sample text?` },
          { own: true, dtime: "4:16", content: `Where's some sample text?` },
          { own: true, dtime: "4:16", content: `Where's some sample text?` },
        ],
      },
    ],
  },
};

const reducer = createReducer(initialState, {
  [select_uid]: (state, action) => {
    state.users.selectedId = action.payload;
  },
  [send_message]: (state, action) => {
    let date = new Date(),
      newMessage = {
        own: true,
        dtime: date.toTimeString().slice(0, 5),
        content: action.payload.trim(),
      };

    state.users.data
      .filter((i) => i.uid === state.users.selectedId)[0]
      .messages.push(newMessage);
  },
});

export default configureStore({ reducer });
