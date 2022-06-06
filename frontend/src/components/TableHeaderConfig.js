import { Dropdown } from "./Dropdown"

const TableHeaderConfig =
  [
    {
      Header: 'Title',
      accessor: 'article_data.title',
      Filter: false
    },
    {
      Header: 'Authors',
      accessor: 'article_data.authors',
      Filter: false
    }, {
      Header: 'ISSN',
      accessor: 'article_data.issn',
      Filter: false
    }, {
      Header: 'Keywords',
      accessor: 'article_data.keywords',
      Filter: false
    }, {
      Header: 'Source',
      accessor: 'article_data.source',
      Filter: false
    }, {
      Header: 'Industry Codes',
      accessor: 'article_data.industry_codes',
      Filter: false,
      // Filter: Dropdown,
      // disableSortBy: true
    }, {
      Header: 'DOI',
      accessor: 'article_data.doi',
      Filter: false
      // Filter: Dropdown,
      // disableSortBy: true
    }, {
      Header: 'Accession Number',
      accessor: 'article_data.accession_number',
      Filter: false
      // Filter: Dropdown,
      // disableSortBy: true
    }
    , {
      Header: 'Publish Date',
      accessor: 'article_data.publish_date',
      Filter: false
      // Filter: Dropdown,
    }
    ,{
      Header: 'Claim',
      accessor: 'article_data.claim',
      Filter: false
      // Filter: Dropdown,
    },
    {
      Header: 'Method',
      accessor: 'article_data.se_method',
      Filter: false
      // Filter: Dropdown,
    },
    {
      Header: 'rating',
      accessor: 'article_data.rating',
      Filter: false
      // Filter: Dropdown,
    }

  ]
export default TableHeaderConfig;