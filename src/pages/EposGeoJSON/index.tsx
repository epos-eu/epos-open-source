import React, { lazy } from 'react';

import {
    Title,
    Section,
    List,
    ListItem,
    CodeBlock,
    Table,
    TableRow,
    TableCell,
    Image,
    Description,
    SubTitle,
    Maintitle,
    TableHeader
} from './styles'; // Adjust according to your actual styles.ts exports

const Container = lazy(() => import("../../common/Container"));

const EposGeoJSON: React.FC = () => {
    return (
        <Container>
            <Maintitle>EPOS GeoJSON Extensions</Maintitle>
            <Section>
                <SubTitle>Purpose</SubTitle>
                <Description>
                    A number of work packages have requested additional features to be supported by the GUI. Currently, the GUI supports GeoJSON, but GeoJSON doesn't support the desired features. At this late stage, it has been deemed too risky to introduce another format and associated development effort; therefore, an alternative solution is to propose EPOS-specific extensions to the GeoJSON format.
                </Description>
            </Section>

            <Section>
            <SubTitle>Requirements</SubTitle>
                <Table>
                    <thead>
                        <tr>
                            <TableHeader>Requirement</TableHeader>
                            <TableHeader>Description</TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow>
                            <TableCell>Map Markers</TableCell>
                            <TableCell>The GeoJSON can optionally specify the styling and behaviour of map markers.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Image Overlays</TableCell>
                            <TableCell>The GeoJSON can contain image references that will be displayed as overlays on the map (not geo-tiff).</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Legends</TableCell>
                            <TableCell>Information derived from the Map Markers and Image Overlays can be used to generate map legends.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Map Popup content</TableCell>
                            <TableCell>The GeoJSON can express some control over the properties used to dynamically generate map popups.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Data Visualisation Columns</TableCell>
                            <TableCell>The GeoJSON can express some control over the properties used to dynamically generate data visualisation columns.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Links</TableCell>
                            <TableCell>The GeoJSON properties can include additional information on (hyper)links to include in the map popups and/or data visualisation.</TableCell>
                        </TableRow>
                    </tbody>
                </Table>
            </Section>

            <Section>
                <SubTitle>@epos JSON Objects</SubTitle>
                <Description>
                    All new root JSON objects introduced to support EPOS functionality will be accessible via attribute names that start with <code>@epos_</code>. This is to avoid name clashes and false positives parsing the GeoJSON for EPOS specific information. All EPOS specific JSON objects are optional; if any are missing, sensible default behaviour will be followed, ensuring the raw GeoJSON can still be rendered.
                </Description>
                <CodeBlock>
                    {`{
    "type": "FeatureCollection",
    "@epos_style": {
        ...
    },
    ...
}`}
                </CodeBlock>
            </Section>

            <Section>
                <SubTitle>Styling</SubTitle>
                <Description>
                    The styling of map markers and map legends for GeoJSON points is defined by the <code>@epos_style</code> object. The object contains attributes named such that they correspond to the value(s) of the <code>@epos_type</code> attribute defined within the <code>properties</code> objects of GeoJSON features.
                </Description>
                <SubTitle>Example</SubTitle>
                <Description>In the example below there is a feature with an @epos_type = station, 
                    this matches the attribute station within the the @epos_style object, hence in
                     this case stations would be rendered on the map as pins with an 's'</Description>
                <Image src="./img/graphs/1562841807572.png" alt="Font Awesome marker with pin"/>
                <Description>A corresponding legend would be generated, looking something like:</Description>
                <Image src="./img/graphs//1562842126236.png" alt="Font Awesome marker with pin"/> 
                <p>feature:</p>
                <CodeBlock>
                    {`"features": [
    {
        "type": "Feature",
        "properties": {
            "@epos_type": "station",//used to lookup @epos_style attributes
            ...
        }
    }
]`}
                </CodeBlock>
                <SubTitle>style:</SubTitle>

                <CodeBlock>
                {
    `"type": "FeatureCollection",
    "@epos_style": {
        //attribute names to match with @epos_type values  
        "station": {
            "label": "This is a station", //use for legend
            "marker": {
                "character": "S", //character type value               
                "pin": true, //true|false
                "clustering": true  //true|false
                //"anchor":"C"  not needed when pin=true
            }
        },
        ...
                `}
                </CodeBlock>
            </Section>

            <Section>
                <SubTitle>Style Attributes</SubTitle>
                <Description>Each @epos_type defined in the @epos_style object defines the following:</Description>
                <Table>
                    <thead>
                        <tr>
                            <TableHeader>Attribute</TableHeader>
                            <TableHeader>Description</TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow>
                            <TableCell>label</TableCell>
                            <TableCell>If provided, this is used as the text to associate with the map marker in the legend; else the <code>@epos_type</code> is used as the legend text.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>marker (object)</TableCell>
                            <TableCell>If provided, attributes of this object define the marker for the <code>@epos_style</code>; else a default point marker will be used.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>marker.pin</TableCell>
                            <TableCell>Defaults to <code>true</code> if absent; if true, the map symbol will be drawn with a pin.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>marker.clustering</TableCell>
                            <TableCell>Defaults to <code>true</code> if absent; if true, map markers in close proximity to each other will be "clustered".</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>marker.anchor</TableCell>
                            <TableCell>If <code>pin</code> = <code>false</code>, the anchor point for the symbol can be defined using the eight points of the compass (N, NE, E, SE, S, SW, W, NW, C).</TableCell>
                        </TableRow>
                    </tbody>
                </Table>
            </Section>

            <Section>
                <SubTitle>Symbols</SubTitle>
                <Description>
                    There are three types of symbol that can be used (only one should be used), these are defined by setting the appropriately named attribute within the <code>marker</code> object:
                </Description>
                <Table>
                    <thead>
                        <tr>
                            <TableHeader>Type</TableHeader>
                            <TableHeader>Example</TableHeader>
                            <TableHeader>pin = false</TableHeader>
                            <TableHeader>pin = true</TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow>
                            <TableCell>marker.href</TableCell>
                            <TableCell>“www.thing.com/thing.png”</TableCell>
                            <TableCell>
                                <Image src="./img/graphs/1562843584966.png" alt="Marker href without pin"/>
                            </TableCell>
                            <TableCell>
                                <Image src="./img/graphs/1562843563562.png" alt="Marker href with pin"/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>marker.fontawesome_class</TableCell>
                            <TableCell>“fas fa-star”</TableCell>
                            <TableCell>
                                <Image src="./img/graphs/1562843684005.png" alt="Font Awesome marker without pin"/>
                            </TableCell>
                            <TableCell>
                                <Image src="./img/graphs/1562843500758.png" alt="Font Awesome marker with pin"/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>marker.character</TableCell>
                            <TableCell>“S”</TableCell>
                            <TableCell>
                                <Image src="./img/graphs/1562843284469.png" alt="Character marker without pin"/>
                            </TableCell>
                            <TableCell>
                                <Image src="./img/graphs/1562842713389.png" alt="Character marker with pin"/>
                            </TableCell>
                        </TableRow>
                    </tbody>
                </Table>
            </Section>
            <SubTitle>Image Example</SubTitle>
            <CodeBlock>
                {
                   ` "thing": {
            "label": "This is a thing", //use for legend
            "marker": {
                "href": "www.thing.com/thing.png", //image url type value
                "pin": false, //true|false
                "clustering": false, //true|false
                "anchor": "C" // N|NE|E|SE|S|SW|W|NW|C (default: C) used when pin=false
            }
        }
               ` }
            </CodeBlock>
            <SubTitle>Font Awesome Example</SubTitle>
        <CodeBlock>
            {
                `
                "event": {
            "label": "This is an event", //use for legend
            "marker": {
                "fontawesome_class": "fas fa-star", //fontawesome-class type value 
                "pin": false, //true|false
                "clustering": false, //true|false
                "anchor": "C" // N|NE|E|SE|S|SW|W|NW|C (default: C) used when pin=false
            }
        },

                `
            }
        </CodeBlock>
        <SubTitle>Character Example</SubTitle>
        <CodeBlock>
            {
                `
            "station": {
            "label": "This is a station", //use for legend
            "marker": {
                "character": "S", //character type value               
                "pin": true, //true|false
                "clustering": true //true|false
                //"anchor":"C"  not needed when pin=true
            }
        },
                 `
            }
        </CodeBlock>
        <SubTitle> Symbol Logic</SubTitle>
        <Image src="./img/graphs/marker%20flow.png" alt="Font Awesome marker with pin"/>
        <SubTitle>Colour</SubTitle>
        <Description>A note on colour, to prevent accidental reuse of the same colour
         by multiple map layers in the EPOS GUI, colours will be automatically assigned.
         </Description>
        <SubTitle>Legends</SubTitle>
        <Description>Legends are constructed by combining the map marker and label from the corresponding
             @epos_type within the the @epos_style object.</Description>
        <Image src="./img/graphs/1562842126236.png" alt="Character marker without pin"/>
        <SubTitle>Legend Logic </SubTitle>
        <Image src="./img/graphs/legend%20flow.png" alt="Character marker without pin"/>
      <Section>
                <SubTitle>Image Overlays</SubTitle>
              
                <Description>
                    Image overlays (geo-referenced images) are supported by adding an <code>@epos_image_overlay</code> object to a GeoJSON feature. There is a 1:1 mapping between the feature and the overlay - that way, the <code>properties</code> for the feature can be used for the image overlay.
                </Description>
                <SubTitle>Example</SubTitle>
                <CodeBlock>
                    {`{
    "type": "Feature",
    "properties": {
        "@epos_type": "overlay",
        ...
    },
    "@epos_image_overlay": {
        "href": "https://sandbox.zenodo.org/2017062703_sd_era_4rlks.unw.png",
        "bbox": [
            -4.5184,
            36.4027,
            -3.2463,
            37.7806
        ],
        "legend": {
            "href": "www.abc.com/legend-image.png"
        }
    },
    "geometry": null //NO GEOMETRY FOR OVERLA
}`}
    <Section>
                <SubTitle>Image Overlay Attributes</SubTitle>
                <SubTitle>Each @epos_image_overlay object defined should have the following:</SubTitle>
                <Table>
                    <thead>
                        <tr>
                            <th>Attribute</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow>
                            <TableCell>href</TableCell>
                            <TableCell>The URL to the image to display on the map</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>bbox</TableCell>
                            <TableCell>	The bounding box (rectangular region) in which to place the image, the order is [lat1, lon1, lat2, lon2]</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>legend</TableCell>
                            <TableCell>A legend object can be include to provide a legend appropriate for the image overlay</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>legend.href</TableCell>
                            <TableCell>The only property of the legend object currently supported is a image URL to be used as the legend for the overlay</TableCell>
                        </TableRow>
                    </tbody>
                </Table>
            </Section>
                </CodeBlock>
    </Section>
        <SubTitle>Image Types</SubTitle>
        <Description>A conscious decision has been made to not support GeoTIFF in this iteration of 
            development of the EPOS GUI, hence it assumed that Leaflet https://leafletjs.com/ will support 
            the same image types as commonly supported by browsers.</Description>
        <SubTitle>Geometry</SubTitle>
        <Description>The geometry for the feature containing the 
            @epos_image_overlay object will be ignored, 
            therefore should ideally be set to null. 
            The reason for this is that it is essential
             the image overlay has rectangular geographic bounds,
              hence a bbox has been defined in the @epos_image_overlay object.</Description>
        <SubTitle>bbox</SubTitle>
        <Description>The spatial reference for the bbox is assumed to match the spatial reference for the containing GeoJSON object(s).</Description>
        <Description>The order of the values is [lat1, lon1, lat2, lon2].</Description>
        <Description>Caution: if the area crosses the antimeridian (often confused with the International Date Line), you must specify corners outside the [-180, 180] degrees longitude range.</Description>
        <a href=""><SubTitle>https://leafletjs.com/reference-1.5.0.html#latlngbounds</SubTitle></a>
        <SubTitle>Feature Properties</SubTitle>
        <Description>In GeoJSON a feature can define a properties object, this object contains metadata about the feature.</Description>
        <Description>The EPOS GeoJSON extension adds three ways in which the data-author can express some control over how 
            those properties are used within the EPOS GUI. The approach taken is to introduce @epos_xxx attributes that
             reference other true properties of the feature, the reason for this are to:</Description>
           <ul>
            <ListItem>prevent duplication of metadata just to satisfy the EPOS GUI.</ListItem>
            <ListItem>maintain the true GeoJSON properties that may be needed in other contexts.</ListItem>
           </ul>
        <SubTitle>@epos_label_key</SubTitle>
        <Description>The value for the @epos_label_key attribute should be the name of one true attribute of theproperties object that is 
            to be used when ever a label, title, tool-tip etc. is needed within the EPOS GUI.</Description>
            <CodeBlock>
                {
                  `
                  "features": [
        {
            "type": "Feature",
            "properties": {
                ...
                "@epos_label_key": "Title", //used for things like tooltips
                ...
                "Title": "adasdasdd",
                ...
                  `  
                }
            </CodeBlock>
            <SubTitle>@epos_map_keys</SubTitle>
            <Description>The value for the @epos_map_keys attribute should be the ordered names of one or more true 
                attributes of the properties object that are to be used in the map context within the EPOS GUI, for 
                example to define the properties display in the map popup.</Description>
            <CodeBlock>
                {
                  `
                "features": [
        {
            "type": "Feature",
            "properties": {
				...
                "@epos_map_keys": [ //typically used for map popups
                    "Title",
                    "Description",
                    "Summary",
                    "@epos_links"
                ],
               ...
                "Title": "adasdasdd",               
                "Description": "Hellenic Seismic Network",
                "Summary": "Properties can contain HTML <img src=\"smiley.gif\">",
                "@epos_links": [...]

                  `  
                }
            </CodeBlock>
            <SubTitle>@epos_data_keys</SubTitle>
            <Description>The value for the @epos_data_keys attribute should be the ordered names of one or more true 
                attributes of the properties object that are to be used in the data-visualisation context within the EPOS GUI,
                 for example to define the columns to display in the data table.</Description>
            <CodeBlock>
                {
                  `
            "features": [
                {
            "type": "Feature",
            "properties": {
                ...
                "@epos_data_keys": [ //typically used for data visualisation columns
                    "Title",
                    "Elevation",
                    "Description" 
                ],
                "Title": "my title", 
                "Elevation": "122",
                "Description": "Hellenic Seismic Network",
                ...
                  `  
                }
            </CodeBlock>
      
            <Section>
                <SubTitle>Default Behaviour</SubTitle>
                <Description>If the relevant @epos_ attribute for the context is missing or empty the EPOS GUI will revert to a default behaviour:</Description>
                <Table>
                    <thead>
                        <tr>
                            <TableHeader>Context</TableHeader>
                            <TableHeader>Missing/Empty</TableHeader>
                            <TableHeader>Default Behaviour</TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow>
                            <TableCell>Labelling</TableCell>
                            <TableCell>@epos_label_key</TableCell>
                            <TableCell>All (non @epos_) primitive (strings) property names will be searched (case-insensitive) for the following: name, title, label, description in that order. If no property is found then there will be no labelling for that feature.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Map</TableCell>
                            <TableCell>@epos_map_keys</TableCell>
                            <TableCell>All (non @epos_) primitive (numbers, strings, booleans, primitive-arrays) properties will be used in an arbitrary order, for example to populate the content of a map popup.	</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Data Visualisation</TableCell>
                            <TableCell>	@epos_data_keys</TableCell>
                            <TableCell>All (non@epos_) primitive (numbers, strings, booleans, primitive-arrays) properties will be used in an arbitrary order, for example to populate the columns of the data visualisation.</TableCell>
                        </TableRow>
                    </tbody>
                </Table>
            </Section>
            <SubTitle>Types of Properties</SubTitle>
            <Description>As mentioned above, in general the only properties that the EPOS GUI will support are those with primitive 
                (numbers, strings, booleans, primitive-arrays) values</Description>
                
            <SubTitle>Links</SubTitle>
            <Description>@epos_links is a special type of property introduced to support the addition of (hyper)links that require an 
                individual object per link to capture the href, label, type and authenticatedDownload (whether the link should be called
                 with authentication headers set, including the EPOS authentication token)</Description>
            <SubTitle>properties:</SubTitle>
             <CodeBlock>
                    {`
"features": [
        {
            "type": "Feature",
            "properties": {
                ...
                "@epos_map_keys": [ //typically used for map popups
                    "Title",
                    "@epos_links"
                ],
                "@epos_data_keys": [ //typically used for data visualisation columns
                    "Title",
                    "@epos_links"
                ],
                "Title": "my title",
                "@epos_links": [
                    {
                        "href": "http://volobsis.ipgp.fr/volcano-bullexcep.pdf",
                        "label": "Download",
                        "type": "application/pdf",
                        "authenticatedDownload": true
                    },
                    {
                        "href": "https://sandbox.zenodo.org/20170703.unw.png",
                        "label": "Preview",
                        "type": "image/x-icon",
                        "authenticatedDownload": false
                    },
                    {
                        "href": "https://creativecommons.org/licenses/by-sa/4.0/",
                        "label": "License",
                        "type": "text/html",
                        "authenticatedDownload": false
                    }
                ]

                    `}
                    </CodeBlock>

         <Section>
         <SubTitle>Summary</SubTitle>
                <Table>
                    <thead>
                        <tr>
                            <TableHeader>Type</TableHeader>
                            <TableHeader>Context</TableHeader>
                            <TableHeader>Example</TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow>
                            <TableCell>boolean</TableCell>
                            <TableCell>Map | Data</TableCell>
                            <TableCell>"Active": true</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>number</TableCell>
                            <TableCell>Map | Data</TableCell>
                            <TableCell>"Height": 123</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>string</TableCell>
                            <TableCell>Label | Map | Data</TableCell>
                            <TableCell>"Title": "my title"</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>HTML - string</TableCell>
                            <TableCell>Map</TableCell>
                            <TableCell>{'"Summary": "Properties can contain HTML <img src=\"smiley.gif\">"'}</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell>array [ boolean / number / string]</TableCell>
                        <TableCell>Map | Data</TableCell>
                        <TableCell>"Institutions": [ "Insitution 1", "Insitution 2", "Insitution 3" ]</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell>array [ boolean / number / string / HTML-string]</TableCell>
                        <TableCell>Map </TableCell>
                        <TableCell>{'"Institutions": [ "Insitution <img src=\"smiley.gif\">" ]</TableCell>'}</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell>@epos_links object</TableCell>
                        <TableCell>Map | Data</TableCell>
                        <TableCell>"@epos_links": '[ "href": "http://volobsis.ipgp.fr/volcano-bullexcep.pdf", "label": "Download","type": "application/pdf", "authenticatedDownload": true ]'</TableCell>
                        </TableRow>
                    </tbody>
                </Table>
            </Section>

            <Section>
                <SubTitle>Full Sample</SubTitle>
                <CodeBlock>
                    { `
                    { 
                        "type": "FeatureCollection",
                        "@epos_style": {
                            //attribute names to match with @epos_type values  
                            "station": {
                                "label": "This is a station", //use for legend
                                "marker": {
                                    "character": "S", //character type value               
                                    "pin": "true", //true|false"
                                    "clustering": "true" //true|false"
                                    //"anchor":"C"  not needed when pin=true
                                }
                            },
                            "event": {
                                "label": "This is an event", //use for legend
                                "marker": {
                                    "fontawesome_class": "fas fa-star", //fontawesome-class type value 
                                    "pin": "false", //true|false"
                                    "clustering": "false", //true|false"
                                    "anchor": "C" // N|NE|E|SE|S|SW|W|NW|C (default: C) used when pin=false
                                }
                            },
                            "thing": {
                                "label": "This is a thing", //use for legend
                                "marker": {
                                    "href": "www.thing.com/thing.png", //image url type value
                                    "pin": "false", //true|false"
                                    "clustering": "false", //true|false"
                                    "anchor": "C" // N|NE|E|SE|S|SW|W|NW|C (default: C) used when pin=false
                                }
                            }
                        },
                        "features": [
                            {
                                "type": "Feature",
                                "properties": {
                                    "@epos_type": "event", //used to lookup @epos_style attributes 
                                    "@epos_label_key": "Title", //used for things like tooltips
                                    "@epos_map_keys": [ //typically used for map popups
                                        "Title",
                                        "Description",
                                        "Summary",
                                        "@epos_links"
                                    ],
                                    "@epos_data_keys": [ //typically used for data visualisation columns
                                        "Title",
                                        "Description",
                                        "@epos_links"
                                    ],
                                    "Title": "my title",
                                    "Institutions": [  // array of primitives
                                        "Insitution 1",
                                        "Insitution 2",
                                        "Insitution 3"
                                    ],
                                    "Elevation": "122",
                                    "Description": "Hellenic Seismic Network",
                                    "Summary": "Properties can contain HTML <img src=\"smiley.gif\">",
                                    "@epos_links": [
                                        {
                                            "href": "http://volobsis.ipgp.fr/volcano-bullexcep.pdf",
                                            "label": "Download",
                                            "type": "application/pdf",
                                            "authenticatedDownload": true
                                        },
                                        {
                                            "href": "https://sandbox.zenodo.org/20170703.unw.png",
                                            "label": "Preview",
                                            "type": "image/x-icon",
                                            "authenticatedDownload": false
                                        },
                                        {
                                            "href": "https://creativecommons.org/licenses/by-sa/4.0/",
                                            "label": "License",
                                            "type": "text/html",
                                            "authenticatedDownload": false
                                        }
                                    ]
                                },
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [
                                        24.38591,
                                        40.93704
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "@epos_type": "overlay",
                                    
                                    // for image overlays, used as label on sub layer & legend & tooltip 
                                    "@epos_label_key": "Name",         
                                    "@epos_map_keys": [
                                        "Name",
                                        "Description",
                                        "Elevation",
                                        "Preview"
                                    ],
                                     "@epos_data_keys": [
                                        "Name",
                                        "Description",
                                        "Elevation" 
                                    ],
                                    "Name": "My layer Label",
                                    "Elevation": "500",
                                    "Description": "Hellenic Seismic Network",
                                    "Preview": "some HTML <img src=\"smiley.png\">",
                                },
                                "@epos_image_overlay": // not supporting GeoTIFF - normal images only 
                                {
                                    "href": "https://sandbox.zenodo.org/2017062703_sd_era_4rlks.unw.png",
                                    "bbox": [  // position on map   
                                        -4.5184, // spatial reference for the bbox 
                                        36.4027, // is assumed to match the spatial 
                                        -3.2463, // reference for the GeoJSON object 
                                        37.7806  // the order is lat1, lon1, lat2, lon2
                                    ],
                                    "legend ": {
                                        "href": "www.abc.com/legend-image.png" //legend image 
                                    }
                                },
                                "geometry": null //NO GEOMETRY FOR OVERLAY
                            }
                        ]
                    }
                    
                    `}
                </CodeBlock>
            </Section>
        </Container>
    );
};

export default EposGeoJSON;






