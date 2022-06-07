// npm i
import { format } from "date-fns";
import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    // Filter: ColumnFilter, // we use default filter instead of write a filter key for any item
    disableFilters: true, // by using this parameter, you remove filtering from it column
    sticky: "left",
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
    // Filter: ColumnFilter,
    sticky: "left",
  },
  {
    Header: "LAst Name",
    Footer: "LAst Name",
    accessor: "last_name",
    // Filter: ColumnFilter,
    sticky: "left",
  },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "date_of_birth",
    Cell: ({ value }) => {
      // Cell just show to ui and used to formatting cells
      //because we have date in string, we must convert it to date format to set the date to "dd/MM/yyyy" format via format (npm i date-fns)
      return format(new Date(value), "dd/MM/yyyy");
    },
    // Filter: ColumnFilter,
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
    // Filter: ColumnFilter,
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
    // Filter: ColumnFilter,
  },
  {
    Header: "Email",
    Footer: "Email",
    accessor: "email",
    // Filter: ColumnFilter,
  },
  {
    Header: "Age",
    Footer: "Age",
    accessor: "age",
    // Filter: ColumnFilter,
  },
];

// for header group we just need to define "columns" instead of "accessor" and add the columns we need on it
export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
      },
      {
        Header: "LAst Name",
        Footer: "LAst Name",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "info",
    Footer: "info",
    columns: [
      {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "date_of_birth",
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country",
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
      },
    ],
  },
];
