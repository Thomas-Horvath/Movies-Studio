import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronDown } from "lucide-react";
import Link from "next/link";


const genreArr = [{ id: 101, name: 'Action' }, { id: 102, name: 'Animation' }];

const GenreDropDown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="text-white flex items-center text-sm font-medium">
                Genre <ChevronDown className="ml-1" size={20} />
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuLabel>Select a genre</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {genreArr.map((item) => (
                    <DropdownMenuItem key={item?.id}>
                        <Link href={`/genre/${item?.id}?genre=${item?.name}`}>{item?.name}</Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default GenreDropDown