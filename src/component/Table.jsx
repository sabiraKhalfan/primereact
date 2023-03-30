
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import React, { useState } from 'react'
import { FilterMatchMode } from 'primereact/api'
import { InputText } from 'primereact/inputtext';

const Table = ({ data = [], columns = [], sortable, paginator, filter }) => {
    const fields = columns.reduce((acc, crr) => {
        return acc = Object.assign(acc, { [crr.field]: { value: null } })
    }, {})
    console.log(fields)

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        ...fields
    })
    const columnFilter = (e) => {
        console.log(e.constraints)
        setFilters({
            ...filters,
            [e.field]:
            {
                value: e.constraints.value,
                matchMode: FilterMatchMode.CONTAINS
            }
        })
    }
    const Filterelement = (field) => {

        return (<InputText onInput={(e) => {
            console.log(e)
            setFilters({
                ...filters,
                [field]:
                {
                    value: e.target.value,
                    matchMode: FilterMatchMode.CONTAINS
                }
            })
        }} />)
    }
    const matchModes = [
        { label: 'Contains', value: FilterMatchMode.CONTAINS },
    ];
    

        
    
    const refresh = () => {
        setFilters({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            ...fields
        })
    }

    return (<>
        {filter && <InputText
            placeholder='search . . .'
            onInput={(e) => setFilters({
                global:
                {
                    value: e.target.value,
                    matchMode: FilterMatchMode.CONTAINS
                }
            })}
        />}
        <button onClick={refresh}><span className='pi pi-refresh'></span></button>
        <DataTable
            value={data}
            responsiveLayout='scroll'
            filters={filter && filters}
            paginator={paginator}
            rows={3}
            rowsPerPageOptions={[3, 6, 9]}
            tableStyle={{ minWidth: '50rem' }}>
        
            {columns.map((e, i) => {
        return <Column key={i}
            reset
            field={e.field}
            header={e.header}
            sortable={sortable}
            filter
            filterMatchModeOptions={matchModes}
            onFilterApplyClick={(e) => columnFilter(e)}
            filterElement={() => Filterelement(e.field)}
            onFilterMatchModeChange={(e) => console.log(e)}
            ></Column>
        })
        }
        </DataTable>
    </>
    )
}

export default Table