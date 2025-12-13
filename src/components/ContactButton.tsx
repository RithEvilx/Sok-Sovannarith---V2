import { memo, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Box, Flex } from "@chakra-ui/react";
import { RiContactsBook3Fill } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { Tooltip } from "./ui/tooltip";
import { usePanelColors } from "@/constants/styles";
import { useColorMode } from "./ui/color-mode";

const MotionBox = motion(Box);

function ContactButton() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const { panelBg, panelBorder, hoverBg } = usePanelColors();
  const { colorMode } = useColorMode();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const show = scrolled; // show after user scrolls; set to true to always show

  const handleDownloadContact = () => {
    const vcard = `
BEGIN:VCARD
VERSION:3.0
N:;Frontend Developer;;;
FN:Sok Sovannarith
TITLE:Sok Sovannarith
TEL;TYPE=CELL:+855016302954
EMAIL:sovannarithx@gmail.com
URL:https://sok-sovannarith-v2.vercel.app/
END:VCARD
`.trim();

    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "Sok_Sovannarith.vcf";
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      alert(t("contact_download_hint", "Contact downloaded. Double-click the file to add it to your Contacts app."));
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <MotionBox
          as="div"
          position="fixed"
          right="20px"
          zIndex={2000}
          initial={{ opacity: 0, scale: 0.9, bottom: 0 }}
          animate={{ opacity: 1, scale: 1, bottom: 90 }}
          exit={{ opacity: 0, scale: 0.9, bottom: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
        >
          <Tooltip showArrow content={t("Save contact")} positioning={{ placement: "left" }} openDelay={0} closeDelay={100}>
            <Flex
              justifyContent="center"
              alignItems="center"
              onClick={handleDownloadContact}
              boxSize="3.5rem"
              rounded="full"
              boxShadow="md"
              bg={panelBg}
              borderColor={panelBorder}
              _hover={{ bg: hoverBg }}
              color={colorMode === "dark" ? "white" : "black"}
              aria-label={t("Save contact")}
              transition="all 0.5s"
              cursor="pointer"
            >
              <RiContactsBook3Fill size="1.5rem" />
            </Flex>
          </Tooltip>
        </MotionBox>
      )}
    </AnimatePresence>
  );
}

export default memo(ContactButton);
