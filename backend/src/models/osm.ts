
/**
 * AUTO-GENERATED FILE @ 2017-06-03 15:50:06 - DO NOT EDIT!
 *
 * This file was generated with schemats node package:
 * $ schemats generate -c mysql://username:password@0.0.0.0/pro_habits -s pro_habits -o osm.ts
 *
 * Re-run the command above.
 *
 */


export namespace activitiesFields {
    export type id = number;
    export type user_id = number | null;
    export type message = string | null;
    export type datetime = Date | null;

}

export interface activities {
    id: activitiesFields.id;
    user_id: activitiesFields.user_id;
    message: activitiesFields.message;
    datetime: activitiesFields.datetime;

}

export namespace commitsFields {
    export type id = number;
    export type commit_type_id = number | null;
    export type name = string | null;
    export type description = string | null;
    export type day = number | null;

}

export interface commits {
    id: commitsFields.id;
    commit_type_id: commitsFields.commit_type_id;
    name: commitsFields.name;
    description: commitsFields.description;
    day: commitsFields.day;

}

export namespace commit_typesFields {
    export type id = number;
    export type name = string | null;

}

export interface commit_types {
    id: commit_typesFields.id;
    name: commit_typesFields.name;

}

export namespace journalsFields {
    export type id = number;
    export type user_id = number | null;
    export type body = string | null;
    export type date = Date | null;
    export type published = boolean;

}

export interface journals {
    id: journalsFields.id;
    user_id: journalsFields.user_id;
    body: journalsFields.body;
    date: journalsFields.date;
    published: journalsFields.published;

}

export namespace quotesFields {
    export type id = number;
    export type header = string | null;
    export type body = string | null;
    export type author = string | null;
    export type picture = string | null;

}

export interface quotes {
    id: quotesFields.id;
    header: quotesFields.header;
    body: quotesFields.body;
    author: quotesFields.author;
    picture: quotesFields.picture;

}

export namespace usersFields {
    export type id = number;
    export type sub = string;
    export type name = string | null;
    export type nickname = string | null;
    export type picture = string | null;
    export type gender = string | null;
    export type day = number | null;

}

export interface users {
    id: usersFields.id;
    sub: usersFields.sub;
    name: usersFields.name;
    nickname: usersFields.nickname;
    picture: usersFields.picture;
    gender: usersFields.gender;
    day: usersFields.day;

}

export namespace users_commitsFields {
    export type user_id = number;
    export type commit_id = number;
    export type created_at = Date | null;

}

export interface users_commits {
    user_id: users_commitsFields.user_id;
    commit_id: users_commitsFields.commit_id;
    created_at: users_commitsFields.created_at;

}
