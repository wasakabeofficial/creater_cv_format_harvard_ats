import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import type { CurriculumVitae } from "../../../types/master/CurriculumVitae.type";

const styles = StyleSheet.create({
  page: {
    paddingVertical: 45,
    paddingHorizontal: 50,
    backgroundColor: "#FFFFFF",
    fontFamily: "Helvetica",
  },

  header: {
    textAlign: "center",
    marginBottom: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 2,
    color: "#000000",
  },
  name_degree: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 2,
    color: "#000000",
  },
  jobTitle: {
    fontSize: 11,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 6,
    color: "#000000",
  },
  contactLine: {
    fontSize: 10,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 4,
    color: "#000000",
  },
  link: {
    color: "#000000",
    textDecoration: "none",
  },
  headerDivider: {
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    marginTop: 8,
    marginBottom: 12,
  },
  // SECCIONES
  sectionTitle: {
    fontSize: 10.5,
    fontWeight: "bold",
    textTransform: "uppercase",
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    marginTop: 10,
    marginBottom: 6,
    paddingBottom: 1,
    color: "#000000",
  },
  entryBlock: {
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 1,
  },
  boldText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#000000",
  },
  boldTextInsitution: {
    width: "70%",
  },
  italicText: {
    fontSize: 10,
    fontStyle: "italic",
    color: "#000000",
  },
  dateLocationText: {
    fontSize: 9,
    textAlign: "right",
    color: "#000000",
  },
  dateLocationTextIns: {
    width: "30%",
  },
  // LISTAS / BULLETS
  bulletRow: {
    flexDirection: "row",
    marginBottom: 2,
    paddingLeft: 8,
  },
  bullet: {
    width: 10,
    fontSize: 9,
    color: "#000000",
  },
  bulletContent: {
    flex: 1,
    fontSize: 9,
    color: "#374151", // Gris oscuro para mejor lectura
    textAlign: "justify",
    lineHeight: 1.3,
  },
  // HABILIDADES
  skillRow: {
    flexDirection: "row",
    marginBottom: 3,
    fontSize: 9,
  },
  skillCategory: {
    fontWeight: "bold",
    textTransform: "uppercase",
    width: 130,
    color: "#000000",
  },
  skillList: {
    flex: 1,
    color: "#1f2937",
  },
});

interface CVDocumentProps {
  data: CurriculumVitae;
  t: any;
}

export const CVDocument = ({ data, t }: CVDocumentProps) => {
  const {
    personalInformation,
    education,
    workExperience,
    skillGroups,
    languages,
  } = data;

  return (
    <Document title={`CV_${personalInformation.fullName}`}>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{personalInformation.fullName}</Text>
          {education.map((edu) => (
            <Text style={styles.name_degree}>{edu.degree}</Text>
          ))}

          <View style={styles.contactLine}>
            <Text>{personalInformation.location} | </Text>
            <Text>{personalInformation.telephone} | </Text>
            <Text>{personalInformation.email} | </Text>
            <Link
              style={styles.link}
              src={personalInformation.linkedinUrl || ""}
            >
              <Text>LinkedIn</Text>
            </Link>
            {personalInformation.portfolioUrl && (
              <>
                <Text> | </Text>
                <Link
                  style={styles.link}
                  src={personalInformation.portfolioUrl}
                >
                  <Text>Portfolio</Text>
                </Link>
              </>
            )}
          </View>
        </View>

        <View style={styles.headerDivider} />

        {/* EXPERIENCIA LABORAL - Prioridad según tu captura */}
        {workExperience.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>{t.workExperience}</Text>
            {workExperience.map((work) => (
              <View key={work.id} style={styles.entryBlock}>
                <View style={styles.row}>
                  <Text style={styles.boldText}>{work.company}</Text>
                  <Text style={styles.dateLocationText}>{work.location}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.italicText}>{work.position}</Text>
                  <Text style={styles.dateLocationText}>
                    {work.startDate} — {work.endDate}
                  </Text>
                </View>
                {work.description.split("\n").map((line, i) => {
                  const cleanLine = line.replace("•", "").trim();
                  if (!cleanLine) return null;
                  return (
                    <View key={i} style={styles.bulletRow}>
                      <Text style={styles.bullet}>•</Text>
                      <Text style={styles.bulletContent}>{cleanLine}</Text>
                    </View>
                  );
                })}
              </View>
            ))}
          </View>
        )}

        {/* EDUCACIÓN */}
        {education.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>{t.education}</Text>
            {education.map((edu) => (
              <View key={edu.id} style={styles.entryBlock}>
                <View style={styles.row}>
                  <Text style={styles.boldTextInsitution}>
                    {edu.institution}
                  </Text>
                  <Text style={styles.dateLocationTextIns}>{edu.location}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.italicText}>
                    {edu.degree} en {edu.fieldOfStudy}
                  </Text>
                  <Text style={styles.dateLocationText}>
                    {edu.startDate} — {edu.endDate}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* HABILIDADES Y COMPETENCIAS */}
        {skillGroups.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>{t.skills}</Text>
            {skillGroups.map((group) => (
              <View key={group.id} style={styles.skillRow}>
                <Text style={styles.skillCategory}>{group.category}: </Text>
                <Text style={styles.skillList}>{group.skills.join(", ")}</Text>
              </View>
            ))}
          </View>
        )}

        {/* IDIOMAS */}
        {languages.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>{t.languages}</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
              {languages.map((lang, index) => (
                <Text key={lang.id} style={{ fontSize: 9 }}>
                  <Text style={{ fontWeight: "bold" }}>{lang.language}:</Text>
                  <Text style={{ fontStyle: "italic" }}>
                    {" "}
                    {lang.proficiency}
                  </Text>
                  {index < languages.length - 1 ? " ;" : ""}
                </Text>
              ))}
            </View>
          </View>
        )}
      </Page>
    </Document>
  );
};
