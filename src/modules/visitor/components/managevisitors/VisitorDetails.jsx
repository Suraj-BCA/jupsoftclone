import React from 'react'

function VisitorDetails() {
  return (
    <div className="overflow-x-auto bg-white rounded-lg border">
      <table className="w-full border-collapse text-sm">

        <thead className="bg-gray-100 text-gray-700 text-[1rem]">
          <tr>
            <th className="px-4 py-3 border text-left">S.No.</th>
            <th className="px-4 py-3 border text-left">Date Of Entry</th>
            <th className="px-4 py-3 border text-left">Visitor</th>
            <th className="px-4 py-3 border text-left">Name</th>
            <th className="px-4 py-3 border text-left">Mobile No</th>
            <th className="px-4 py-3 border text-left">Dept.</th>
            <th className="px-4 py-3 border text-left">Approved By</th>
            <th className="px-4 py-3 border text-left">Check In</th>
            <th className="px-4 py-3 border text-left">Check Out</th>
            <th className="px-4 py-3 border text-left">Visitor Type</th>
            <th className="px-4 py-3 border text-left">Vehicle Number</th>

          </tr>
        </thead>

        <tbody>
          <tr className="hover:bg-gray-50">
            <td className="px-4 py-2 border">Amit</td>
            <td className="px-4 py-2 border">9999999999</td>
            <td className="px-4 py-2 border">Meeting</td>
            <td className="px-4 py-2 border text-green-600">Checked-In</td>
            <td className="px-4 py-2 border text-blue-600 cursor-pointer">
              View
            </td>
          </tr>
        </tbody>

      </table>
    </div>
  );
}

export default VisitorDetails;
