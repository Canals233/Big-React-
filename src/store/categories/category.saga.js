import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import {
    FetchCategoriesFailed,
    FetchCategoriesSuccess,
} from "./category.action";

export function* FetchCategoriesAsync() {
    try {
        const categoriesArray = yield call(
            getCategoriesAndDocuments,
            "categories"
        );
        yield put(FetchCategoriesSuccess(categoriesArray));
    } catch (error) {
        yield put(FetchCategoriesFailed(error));
    }
}

export function* onFetchCategories() {
    yield takeLatest("FetchCategoriesStart", FetchCategoriesAsync);
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)]);
}
