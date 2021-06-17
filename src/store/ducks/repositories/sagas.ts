import { call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { loadFailure, loadSuccess } from "./actions";
import { Repository } from "./types";

export function* load() {
  try {
    const response: { data: Repository[] } = yield call(
      api.get,
      "users/HidekiHrk/repos"
    );
    yield put(loadSuccess(response.data));
  } catch (e) {
    yield put(loadFailure());
  }
}
