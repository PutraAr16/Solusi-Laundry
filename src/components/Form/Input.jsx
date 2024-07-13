import React from 'react'

export function TotalBayar(props) {
    paketId = props.paketId;
    paketList = props.paketList;
    berat = props.berat;
    const total_bayar = paketList.

    return (
        <>
            {/* Total Bayar */}
            <div className="field">
                <label className="label">Total bayar</label>
                <div className="control">
                  <input
                    type="text"
                    className="input rounded-xl py-3 px-2 border border-blue-gray-800 min-w-full mt-2 mb-4"
                    value={props.total}
                    onChange={(e) => setTotal(e.target.value)}
                    placeholder="Total"
                  />
                </div>
              </div>
        </>
    )
}