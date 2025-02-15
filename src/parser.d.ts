export type DBML = {
  project: Project;
  tables: Table[];
  groups: Group[];
  enums: Enum[];
  refs: Ref[];
};

export type Project = {
  options: Options;
};

export type Table = {
  name: string;
  alias: string | null;
  columns: Column[];
  options: Options;
  settings: Settings;
  indices: Index[];
};

export type Column = {
  name: string;
  type: string;
  settings: Settings;
};

export type Index = {
  columns: string[];
  settings: Settings;
};

export type Group = {
  name: string;
  tables: string[];
};

export type Enum = {
  name: string;
  values: {
    name: string;
    settings: Settings;
  }[];
};

export type Ref = {
  cardinality: Cardinality;
  fromTable: string;
  fromColumns: string[];
  toTable: string;
  toColumns: string[];
};

export type Cardinality = ">" | "<" | "-";

export type Options = {
  [name: string]: string;
};

export type Settings = {
  [name: string]: string;
};

export default function parse(input: string): DBML;
