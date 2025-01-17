import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown,
} from 'reactstrap'
import React from 'react'
import { formatFromWei } from '../../utils/bigNumber'

const Wallet = ({ coins }) => (
  <>
    <UncontrolledButtonDropdown
      style={{
        width: '100%',
      }}
    >
      <DropdownToggle
        aria-expanded={false}
        aria-haspopup
        caret
        className="btn-block"
        color="default"
        data-toggle="dropdown"
        id="dropdownMenuButton"
        type="button"
      >
        Wallet
      </DropdownToggle>
      <DropdownMenu
        aria-labelledby="dropdownMenuButton"
        style={{
          width: '100%',
          top: '30px !important',
          backgroundColor: '#000',
        }}
      >
        <DropdownItem
          className="text-center"
          href="#"
          onClick={(e) => e.preventDefault()}
        >
          Available Balance
          <DropdownItem divider />
        </DropdownItem>
        {coins?.map((coin) => (
          <DropdownItem key={coin.symbol}>
            <div>
              {coin.symbol} :{' '}
              <span className="float-right">
                {formatFromWei(coin.balanceTokens)}
              </span>
            </div>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </UncontrolledButtonDropdown>
  </>
)
export default Wallet
