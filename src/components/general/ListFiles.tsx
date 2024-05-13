import { IconButton, List, ListItem, ListItemText, Divider, Box } from "@mui/material";
import FileDownloadIcon from '@mui/icons-material/FileDownload';

export default function ListFiles(props) {
    const { itemlist } = props

    return (
        <List
            sx={{
                width: "100%"
            }}
        >
            {itemlist.map((item, index) => (
                <>
                    <ListItem
                        key={index + 7 * 3}
                        secondaryAction={
                            <a href={item.href} target="_black">
                                <IconButton>
                                    <FileDownloadIcon />
                                </IconButton>
                            </a>
                        }
                    >
                        <ListItemText>
                            {item.title}
                        </ListItemText>
                    </ListItem>
                    <Divider />
                </>
            ))}
        </List>
    );
}