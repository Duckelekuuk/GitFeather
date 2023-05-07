import { Component } from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default class ProfileSelectionComponent extends Component {
    render() {
        return (
            <div className={'w-40 justify-self-end'}>
                <div className="relative mt-1">
                    <button
                        type="button"
                        className="relative w-full cursor-default rounded-sm border border-gray-300 text-gray-700 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                        aria-haspopup="listbox"
                        aria-expanded="true"
                        aria-labelledby="listbox-label"
                    >
                        <span className="block truncate">Tom Cook</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronDownIcon className={'h-5 w-5 text-blue-500'} />
                        </span>
                    </button>

                    <ul
                        className="absolute z-10 max-h-60 w-full overflow-auto sm bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                        role="listbox"
                        aria-labelledby="listbox-label"
                        aria-activedescendant="listbox-option-3"
                    >
                        <li
                            className="text-gray-900 relative cursor-default select-none py-2 pl-8 pr-4"
                            id="listbox-option-0"
                            role="option"
                        >
                            <span className="font-normal block truncate">Wade Cooper</span>
                            <span className="text-indigo-600 absolute inset-y-0 left-0 flex items-center pl-1.5">
                                <CheckIcon className={'h-5 w-5 text-blue-500'} />
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
