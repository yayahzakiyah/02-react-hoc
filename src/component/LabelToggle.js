const LabelToggle = ({toggle, toggleStatus, title}) => (
    <div style={{display: 'flex', alignItems: 'center'}}>
        {toggleStatus
            ? <input type='text' value={title}/>
            : <span>{title}</span>
        }
        <div>
            <button style={{margin: '8px', width: '80px'}} onClick={toggle}>
                
            </button>
        </div>
    </div>
)