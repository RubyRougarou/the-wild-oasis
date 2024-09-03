import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "checked-out", label: "Checked out" },
          { value: "checked-in", label: "Checked in" },
          { value: "unconfirmed", label: "Unconfirmed" },
        ]}
      />

      <SortBy
        options={[
          { value: "startDate-asc", label: "Sort by earlier date to recent" },
          { value: "startDate-desc", label: "Sort by recent date to earlier" },
          {
            value: "totalPrice-asc",
            label: "Sort by lowest amount to highest",
          },
          {
            value: "totalPrice-desc",
            label: "Sort by highest amount to lowest",
          },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
