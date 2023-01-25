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
            content: `Sleepin', you're on your tippy toes<br/>             Creepin' around like no one knows<br/>             Think you're so criminal<br/>             Bruises on both my knees for you<br/>             Don't say thank you or please<br/>             I do what I want when I'm wanting to<br/>             My soul? So cynical`,
          },
          {
            own: false,
            dtime: "04:00",
            content: `Sleepin', you're on your tippy toes<br/>             Creepin' around like no one knows<br/>             Think you're so criminal<br/>             Bruises on both my knees for you<br/>             Don't say thank you or please<br/>             I do what I want when I'm wanting to<br/>             My soul? So cynical`,
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
            content: `Sleepin', you're on your tippy toes<br/>             Creepin' around like no one knows<br/>             Think you're so criminal<br/>             Bruises on both my knees for you<br/>             Don't say thank you or please<br/>             I do what I want when I'm wanting to<br/>             My soul? So cynical`,
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
