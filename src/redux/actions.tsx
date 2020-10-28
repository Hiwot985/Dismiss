// Actions and their types

import { Rating, Article } from "./types";

export enum actionIdentifier {
  Join,
  Search,
  Rate,
  Add,
  Select
}

export interface JoinAction {
  type: actionIdentifier;
  email: string;
  password: string
}

export interface SearchAction {
  type: actionIdentifier
  query: string
}

export interface RateAction {
  type: actionIdentifier;
  current: number;
  readable: number;
  objective: number;
  cited: number;
}

export interface AddAction {
  type: actionIdentifier;
  title: string,
  url: string,
  rating: Rating,
  keywords: string[]
}

export interface SelectAction {
  type: actionIdentifier;
  article: Article;
}

export function createJoinAction(_email: string, _password: string): JoinAction {
  return {
    type: actionIdentifier.Join,
    email: _email,
    password: _password
  };
};

export function createSearchAction(_query: string): SearchAction {
  return {
    type: actionIdentifier.Search,
    query: _query,
  };
};

export function createRateAction(_current: number, _readable: number, _objective: number, _cited: number): RateAction {
  return {
    type: actionIdentifier.Rate,
    current: _current,
    readable: _readable,
    objective: _objective,
    cited: _cited
  };
}

export function createAddAction(_id: number, _title: string, _url: string, _rating: Rating, _keywords: string[]): AddAction {
  return {
    type: actionIdentifier.Add,
    title: _title,
    url: _url,
    rating: _rating,
    keywords: _keywords

  };
}

export function createSelectAction(_article: Article): SelectAction {
  return {
    type: actionIdentifier.Select,
    article: _article
  }
}

export type DisMisActions = JoinAction | SearchAction | RateAction | AddAction | SelectAction
