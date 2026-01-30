import { InputField } from './input-field/input-field'
import { InputGroup } from './input-group/input-group'
import { InputClearButton } from './input-helper/input-clear-button'
import { InputHelper } from './input-helper/input-helper'
import { InputLabel } from './input-label/input-label'
import { InputRoot } from './input-root/input-root'
import { InputSlot } from './input-slot/input-slot'

export const InputComposition = {
    Root: InputRoot,
    Label: InputLabel,
    Group: InputGroup,
    Field: InputField,
    Slot: InputSlot,
    ClearButton: InputClearButton,
    Helper: InputHelper,
}

export { default as Input } from './input'
