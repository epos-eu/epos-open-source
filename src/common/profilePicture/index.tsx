type ProfileImageProps = {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
  };
  
  export const ProfileImage = ({
    src,
    alt = "Profile image",
    width = 80,
    height = 80,
  }: ProfileImageProps) => {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "16px",
        }}
      />
    );
  };
  