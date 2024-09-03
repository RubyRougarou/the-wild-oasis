/* eslint-disable react/prop-types */

import TableOperations from "../../ui/TableOperations.jsx";
import Filter from "../../ui/Filter.jsx";
import SortBy from "../../ui/SortBy.jsx";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField={"discount"}
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name(A-Z)" },
          { value: "name-desc", label: "Sort by name(Z-A)" },
          {
            value: "regularPrice-asc",
            label: "Sort by lowest price to highest",
          },
          {
            value: "regularPrice-desc",
            label: "Sort by highest price to lowest",
          },
          {
            value: "maxCapacity-asc",
            label: "Sort by lowest capacity to highest",
          },
          {
            value: "maxCapacity-desc",
            label: "Sort by highest capacity to lowest",
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
